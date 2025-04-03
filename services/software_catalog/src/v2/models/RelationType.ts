import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Supported relation types.
 */
export type RelationType =
  | typeof RELATIONTYPEOWNS
  | typeof RELATIONTYPEOWNEDBY
  | typeof RELATIONTYPEDEPENDSON
  | typeof RELATIONTYPEDEPENDENCYOF
  | typeof RELATIONTYPEPARTSOF
  | typeof RELATIONTYPEHASPART
  | typeof RELATIONTYPEOTHEROWNS
  | typeof RELATIONTYPEOTHEROWNEDBY
  | typeof RELATIONTYPEIMPLEMENTEDBY
  | typeof RELATIONTYPEIMPLEMENTS
  | UnparsedObject;
export const RELATIONTYPEOWNS = "RelationTypeOwns";
export const RELATIONTYPEOWNEDBY = "RelationTypeOwnedBy";
export const RELATIONTYPEDEPENDSON = "RelationTypeDependsOn";
export const RELATIONTYPEDEPENDENCYOF = "RelationTypeDependencyOf";
export const RELATIONTYPEPARTSOF = "RelationTypePartsOf";
export const RELATIONTYPEHASPART = "RelationTypeHasPart";
export const RELATIONTYPEOTHEROWNS = "RelationTypeOtherOwns";
export const RELATIONTYPEOTHEROWNEDBY = "RelationTypeOtherOwnedBy";
export const RELATIONTYPEIMPLEMENTEDBY = "RelationTypeImplementedBy";
export const RELATIONTYPEIMPLEMENTS = "RelationTypeImplements";
