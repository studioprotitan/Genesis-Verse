/**
 * MetaHuman DNA Type Definitions
 * Client-side only, no Firebase dependencies
 * Spark Plan compliant - no external storage
 */

export interface DNAMetadata {
  name: string;
  dbName: 'MH.4' | 'DHI';
  archetype: string;
  gender: 'Male' | 'Female' | 'Unknown';
  age: number;
}

export interface DNAJoint {
  index: number;
  name: string;
  parentIndex: number;
  translation: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
}

export interface DNABlendShape {
  index: number;
  name: string;
  targetIndex: number;
}

export interface SimplifiedDNA {
  metadata: DNAMetadata;
  jointCount: number;
  meshCount: number;
  blendShapeCount: number;
  joints?: DNAJoint[];
  blendShapes?: DNABlendShape[];
  lodCount?: number;
}

export interface PilotWithDNA {
  pilotId: string;
  callsign: string;
  name: string;
  faction: string;
  dnaFileName?: string;
  dnaFileSize?: number;
  dnaMetadata?: DNAMetadata;
  createdAt: string;
  lastModified?: string;
}

export interface DNAUploadStatus {
  status: 'idle' | 'validating' | 'processing' | 'complete' | 'error';
  message: string;
  progress?: number;
}