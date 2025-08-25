/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
