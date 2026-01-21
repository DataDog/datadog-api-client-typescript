/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StatusPageAsIncludedRelationshipsCreatedByUser } from "./StatusPageAsIncludedRelationshipsCreatedByUser";
import { StatusPageAsIncludedRelationshipsLastModifiedByUser } from "./StatusPageAsIncludedRelationshipsLastModifiedByUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The relationships of a status page.
 */
export class StatusPageAsIncludedRelationships {
  "createdByUser"?: StatusPageAsIncludedRelationshipsCreatedByUser;
  "lastModifiedByUser"?: StatusPageAsIncludedRelationshipsLastModifiedByUser;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    createdByUser: {
      baseName: "created_by_user",
      type: "StatusPageAsIncludedRelationshipsCreatedByUser",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "StatusPageAsIncludedRelationshipsLastModifiedByUser",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StatusPageAsIncludedRelationships.attributeTypeMap;
  }

  public constructor() {}
}
