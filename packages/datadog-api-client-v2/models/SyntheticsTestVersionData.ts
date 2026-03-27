/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestVersionAttributes } from "./SyntheticsTestVersionAttributes";
import { SyntheticsTestVersionType } from "./SyntheticsTestVersionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a specific Synthetic test version.
 */
export class SyntheticsTestVersionData {
  /**
   * Attributes of a specific Synthetic test version.
   */
  "attributes"?: SyntheticsTestVersionAttributes;
  /**
   * UUID of the version record.
   */
  "id"?: string;
  /**
   * Type of the version resource.
   */
  "type"?: SyntheticsTestVersionType;

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
      type: "SyntheticsTestVersionAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SyntheticsTestVersionType",
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
    return SyntheticsTestVersionData.attributeTypeMap;
  }

  public constructor() {}
}
