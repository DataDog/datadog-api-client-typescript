import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomFrameworkDataHandleAndVersion } from "./CustomFrameworkDataHandleAndVersion";
import { CustomFrameworkType } from "./CustomFrameworkType";

/**
 * Contains type and attributes for custom frameworks.
 */
export class FrameworkHandleAndVersionResponseData {
  /**
   * Framework Handle and Version.
   */
  "attributes": CustomFrameworkDataHandleAndVersion;
  /**
   * The ID of the custom framework.
   */
  "id": string;
  /**
   * The type of the resource. The value must be `custom_framework`.
   */
  "type": CustomFrameworkType;
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
      type: "CustomFrameworkDataHandleAndVersion",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomFrameworkType",
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
    return FrameworkHandleAndVersionResponseData.attributeTypeMap;
  }

  public constructor() {}
}
