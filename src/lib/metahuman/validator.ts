/**
 * Client-Side DNA File Validator
 * No server calls, works entirely in browser
 * Spark Plan compliant - localStorage only
 */

import type { SimplifiedDNA, DNAMetadata, DNAUploadStatus } from './types';

const DNA_SIGNATURE = 'DNA'; // First 3 bytes of valid DNA file
const MAX_FILE_SIZE = 200 * 1024 * 1024; // 200MB limit for testing

export class DNAValidator {
  /**
   * Validate DNA file signature and size
   */
  static async validateFile(file: File): Promise<{ valid: boolean; error?: string }> {
    // Check file extension
    if (!file.name.endsWith('.dna')) {
      return { valid: false, error: 'File must have .dna extension' };
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      return { valid: false, error: `File too large (max ${MAX_FILE_SIZE / 1024 / 1024}MB)` };
    }

    if (file.size === 0) {
      return { valid: false, error: 'File is empty' };
    }

    try {
      // Read first 3 bytes to check signature
      const buffer = await file.slice(0, 3).arrayBuffer();
      const signature = new TextDecoder().decode(buffer);
      
      if (signature !== DNA_SIGNATURE) {
        return { valid: false, error: 'Invalid DNA file signature' };
      }

      return { valid: true };
    } catch (error) {
      return { valid: false, error: `Validation error: ${error}` };
    }
  }

  /**
   * Extract basic metadata from DNA file
   * Simplified parser - full parsing requires Python backend
   */
  static async extractMetadata(file: File): Promise<SimplifiedDNA> {
    // For Spark Plan, we store basic file info without full parsing
    const metadata: DNAMetadata = {
      name: file.name.replace('.dna', ''),
      dbName: 'MH.4', // Assume latest version
      archetype: 'Unknown',
      gender: 'Unknown',
      age: 0,
    };

    return {
      metadata,
      jointCount: 0,
      meshCount: 0,
      blendShapeCount: 0,
      lodCount: 0,
    };
  }

  /**
   * Convert file to base64 for localStorage
   * WARNING: Only for small DNA files (<5MB) due to localStorage limits
   */
  static async fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = (reader.result as string).split(',')[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  /**
   * Get upload status helper
   */
  static getUploadStatus(
    status: DNAUploadStatus['status'],
    message: string,
    progress?: number
  ): DNAUploadStatus {
    return { status, message, progress };
  }

  /**
   * Format file size for display
   */
  static formatFileSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }
}