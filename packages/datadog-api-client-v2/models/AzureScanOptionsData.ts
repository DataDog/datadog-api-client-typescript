/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AzureScanOptionsDataAttributes } from "./AzureScanOptionsDataAttributes";
import { AzureScanOptionsDataType } from "./AzureScanOptionsDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Single Azure scan options entry.
 */
export class AzureScanOptionsData {
  /**
   * Attributes for Azure scan options configuration.
   */
  "attributes"?: AzureScanOptionsDataAttributes;
  /**
   * The Azure subscription ID.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `azure_scan_options`.
   */
  "type": AzureScanOptionsDataType;

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
      type: "AzureScanOptionsDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AzureScanOptionsDataType",
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
    return AzureScanOptionsData.attributeTypeMap;
  }

  public constructor() {}
}
