/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SeverityOverrideDataType } from "./SeverityOverrideDataType";
import { SeverityOverrideRequestDataAttributes } from "./SeverityOverrideRequestDataAttributes";
import { SeverityOverrideRequestDataRelationships } from "./SeverityOverrideRequestDataRelationships";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the severity override request.
 */
export class SeverityOverrideRequestData {
  /**
   * Attributes of the severity override request.
   */
  "attributes": SeverityOverrideRequestDataAttributes;
  /**
   * Unique identifier of the severity override request. If not provided, an identifier is generated.
   */
  "id"?: string;
  /**
   * Relationships of the severity override request.
   */
  "relationships": SeverityOverrideRequestDataRelationships;
  /**
   * Severity override resource type.
   */
  "type": SeverityOverrideDataType;

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
      type: "SeverityOverrideRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "SeverityOverrideRequestDataRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SeverityOverrideDataType",
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
    return SeverityOverrideRequestData.attributeTypeMap;
  }

  public constructor() {}
}
