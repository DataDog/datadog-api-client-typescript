/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AuthNMappingRelationshipToRole } from "./AuthNMappingRelationshipToRole";
import { AuthNMappingRelationshipToTeam } from "./AuthNMappingRelationshipToTeam";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Relationship of AuthN Mapping create object to a Role or Team.
 */

export type AuthNMappingCreateRelationships =
  | AuthNMappingRelationshipToRole
  | AuthNMappingRelationshipToTeam
  | UnparsedObject;
