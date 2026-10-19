import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of source map. Always `portable_pdb` for Portable PDB files.
 */
export type PortablePdbSourcemapMapKind = typeof PORTABLE_PDB | UnparsedObject;
export const PORTABLE_PDB = "portable_pdb";
