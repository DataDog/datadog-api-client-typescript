/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerGetConfigIncludedItem } from "./SensitiveDataScannerGetConfigIncludedItem";
import { SensitiveDataScannerGetConfigResponseData } from "./SensitiveDataScannerGetConfigResponseData";
import { SensitiveDataScannerMeta } from "./SensitiveDataScannerMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Get all groups response.
 */
export class SensitiveDataScannerGetConfigResponse {
  /**
   * Response data related to the scanning groups.
   */
  "data"?: SensitiveDataScannerGetConfigResponseData;
  /**
   * Included objects from relationships.
   */
  "included"?: Array<SensitiveDataScannerGetConfigIncludedItem>;
  /**
   * Meta response containing information about the API.
   */
  "meta"?: SensitiveDataScannerMeta;

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
    data: {
      baseName: "data",
      type: "SensitiveDataScannerGetConfigResponseData",
    },
    included: {
      baseName: "included",
      type: "Array<SensitiveDataScannerGetConfigIncludedItem>",
    },
    meta: {
      baseName: "meta",
      type: "SensitiveDataScannerMeta",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerGetConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
