import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerGroupTarget } from "./SensitiveDataScannerGroupTarget";

/**
 * Attributes of a scanning group of a target.
 */
export class SensitiveDataScannerTargetGroupAttributes {
  /**
   * Description of the group.
   */
  "description": string;
  /**
   * Whether or not the group is enabled.
   */
  "isEnabled": boolean;
  /**
   * Name of the group.
   */
  "name": string;
  /**
   * Targets the scanning group applies to. A scanning group has a single target for now.
   */
  "targets": Array<SensitiveDataScannerGroupTarget>;
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
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    targets: {
      baseName: "targets",
      type: "Array<SensitiveDataScannerGroupTarget>",
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
    return SensitiveDataScannerTargetGroupAttributes.attributeTypeMap;
  }

  public constructor() {}
}
