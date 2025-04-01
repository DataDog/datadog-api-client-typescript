/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomCostsFileUsageChargePeriod } from "./CustomCostsFileUsageChargePeriod";
import { CustomCostsUser } from "./CustomCostsUser";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Schema of a Custom Costs metadata.
*/
export class CustomCostsFileMetadata {
  /**
   * Total cost in the cost file.
  */
  "billedCost"?: number;
  /**
   * Currency used in the Custom Costs file.
  */
  "billingCurrency"?: string;
  /**
   * Usage charge period of a Custom Costs file.
  */
  "chargePeriod"?: CustomCostsFileUsageChargePeriod;
  /**
   * Name of the Custom Costs file.
  */
  "name"?: string;
  /**
   * Providers contained in the Custom Costs file.
  */
  "providerNames"?: Array<string>;
  /**
   * Status of the Custom Costs file.
  */
  "status"?: string;
  /**
   * Timestamp, in millisecond, of the upload time of the Custom Costs file.
  */
  "uploadedAt"?: number;
  /**
   * Metadata of the user that has uploaded the Custom Costs file.
  */
  "uploadedBy"?: CustomCostsUser;

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
    "billedCost": {
      "baseName": "billed_cost",
      "type": "number",
      "format": "double",
    },
    "billingCurrency": {
      "baseName": "billing_currency",
      "type": "string",
    },
    "chargePeriod": {
      "baseName": "charge_period",
      "type": "CustomCostsFileUsageChargePeriod",
    },
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "providerNames": {
      "baseName": "provider_names",
      "type": "Array<string>",
    },
    "status": {
      "baseName": "status",
      "type": "string",
    },
    "uploadedAt": {
      "baseName": "uploaded_at",
      "type": "number",
      "format": "double",
    },
    "uploadedBy": {
      "baseName": "uploaded_by",
      "type": "CustomCostsUser",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return CustomCostsFileMetadata.attributeTypeMap;

  }

  public constructor() {











  }
}









