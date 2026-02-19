/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeRequestResourceType } from "./ChangeRequestResourceType";
import { ChangeRequestUpdateAttributes } from "./ChangeRequestUpdateAttributes";
import { ChangeRequestUpdateRelationships } from "./ChangeRequestUpdateRelationships";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object to update a change request.
 */
export class ChangeRequestUpdateData {
  /**
   * Attributes for updating a change request.
   */
  "attributes"?: ChangeRequestUpdateAttributes;
  /**
   * Relationships for updating a change request.
   */
  "relationships"?: ChangeRequestUpdateRelationships;
  /**
   * Change request resource type.
   */
  "type": ChangeRequestResourceType;

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
    attributes: {
      baseName: "attributes",
      type: "ChangeRequestUpdateAttributes",
    },
    relationships: {
      baseName: "relationships",
      type: "ChangeRequestUpdateRelationships",
    },
    type: {
      baseName: "type",
      type: "ChangeRequestResourceType",
      required: true,
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
    return ChangeRequestUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
