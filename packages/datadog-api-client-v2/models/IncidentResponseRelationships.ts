/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NullableRelationshipToUser } from "./NullableRelationshipToUser";
import { RelationshipToIncidentAttachment } from "./RelationshipToIncidentAttachment";
import { RelationshipToIncidentIntegrationMetadatas } from "./RelationshipToIncidentIntegrationMetadatas";
import { RelationshipToUser } from "./RelationshipToUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The incident's relationships from a response.
 */
export class IncidentResponseRelationships {
  /**
   * A relationship reference for attachments.
   */
  "attachments"?: RelationshipToIncidentAttachment;
  /**
   * Relationship to user.
   */
  "commanderUser"?: NullableRelationshipToUser;
  /**
   * Relationship to user.
   */
  "createdByUser"?: RelationshipToUser;
  /**
   * A relationship reference for multiple integration metadata objects.
   */
  "integrations"?: RelationshipToIncidentIntegrationMetadatas;
  /**
   * Relationship to user.
   */
  "lastModifiedByUser"?: RelationshipToUser;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attachments: {
      baseName: "attachments",
      type: "RelationshipToIncidentAttachment",
    },
    commanderUser: {
      baseName: "commander_user",
      type: "NullableRelationshipToUser",
    },
    createdByUser: {
      baseName: "created_by_user",
      type: "RelationshipToUser",
    },
    integrations: {
      baseName: "integrations",
      type: "RelationshipToIncidentIntegrationMetadatas",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "RelationshipToUser",
    },
  };
}
