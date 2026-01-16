'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Upload, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { DNAValidator } from '@/lib/metahuman/validator';
import type { SimplifiedDNA, DNAUploadStatus } from '@/lib/metahuman/types';

export default function MetaHumanPortalPage() {
  const router = useRouter();
  const [uploadStatus, setUploadStatus] = useState<DNAUploadStatus>({
    status: 'idle',
    message: 'No file selected',
  });
  const [dnaInfo, setDnaInfo] = useState<SimplifiedDNA | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = async (file: File) => {
    setSelectedFile(file);
    setUploadStatus({ status: 'validating', message: 'Validating DNA file...' });

    try {
      // Validate file
      const validation = await DNAValidator.validateFile(file);
      
      if (!validation.valid) {
        setUploadStatus({ status: 'error', message: validation.error || 'Validation failed' });
        return;
      }

      // Extract metadata
      setUploadStatus({ status: 'processing', message: 'Extracting metadata...' });
      const metadata = await DNAValidator.extractMetadata(file);
      
      setDnaInfo(metadata);
      setUploadStatus({
        status: 'complete',
        message: `✓ ${file.name} validated (${DNAValidator.formatFileSize(file.size)})`,
      });
    } catch (error) {
      setUploadStatus({
        status: 'error',
        message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      });
    }
  };

  const getStatusIcon = () => {
    switch (uploadStatus.status) {
      case 'complete':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'validating':
      case 'processing':
        return <AlertCircle className="w-5 h-5 text-yellow-400 animate-pulse" />;
      default:
        return <Upload className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => router.push('/diesel-city')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 transition-all hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Return to Diesel City</span>
          </button>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            MetaHuman DNA Portal
          </h1>

          <div className="w-32" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-8">
        {/* Info Banner */}
        <div className="mb-6 p-6 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/20 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-2">🧬 DNA File Validator</h2>
          <p className="text-white/70">
            Upload MetaHuman DNA files to validate structure and extract metadata. 
            This is an experimental feature for testing DNA integration.
          </p>
        </div>

        {/* Upload Section */}
        <div className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 mb-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-full max-w-md">
              <label
                htmlFor="dna-upload"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-white/30 rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 transition-all"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {getStatusIcon()}
                  <p className="mb-2 text-sm text-white/70">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-white/50">MetaHuman DNA files (.dna)</p>
                </div>
                <input
                  id="dna-upload"
                  type="file"
                  accept=".dna"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileUpload(file);
                  }}
                />
              </label>
            </div>

            {/* Status Display */}
            <div className="w-full max-w-md p-4 rounded-lg bg-black/30 border border-white/10">
              <div className="flex items-center gap-2">
                {getStatusIcon()}
                <span className={`text-sm ${
                  uploadStatus.status === 'error' ? 'text-red-400' :
                  uploadStatus.status === 'complete' ? 'text-green-400' :
                  'text-white/70'
                }`}>
                  {uploadStatus.message}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* DNA Info Display */}
        {dnaInfo && selectedFile && (
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">DNA File Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-white/50">File Name</p>
                <p className="text-white font-semibold">{selectedFile.name}</p>
              </div>
              <div>
                <p className="text-sm text-white/50">File Size</p>
                <p className="text-white font-semibold">{DNAValidator.formatFileSize(selectedFile.size)}</p>
              </div>
              <div>
                <p className="text-sm text-white/50">Character Name</p>
                <p className="text-white font-semibold">{dnaInfo.metadata.name}</p>
              </div>
              <div>
                <p className="text-sm text-white/50">DB Version</p>
                <p className="text-white font-semibold">{dnaInfo.metadata.dbName}</p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-black/30 border border-white/10">
              <p className="text-xs text-white/50 mb-2">Raw Metadata (JSON)</p>
              <pre className="text-xs text-green-400 overflow-x-auto">
                {JSON.stringify(dnaInfo, null, 2)}
              </pre>
            </div>
          </div>
        )}

        {/* Feature Status */}
        <div className="mt-8 p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
          <h3 className="text-lg font-bold mb-2 text-yellow-400">⚠️ Experimental Feature</h3>
          <ul className="text-sm text-white/70 space-y-1">
            <li>✅ Client-side validation functional</li>
            <li>✅ Basic metadata extraction working</li>
            <li>⏳ Full DNA parsing requires Python backend (Phase 2)</li>
            <li>⏳ Character visualization in Babylon.js (Phase 3)</li>
            <li>⏳ Integration with Pilot ID system (Phase 4)</li>
          </ul>
        </div>
      </main>
    </div>
  );
}