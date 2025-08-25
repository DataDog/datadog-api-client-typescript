/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AzureUCConfigPatchRequestAttributes } from "./AzureUCConfigPatchRequestAttributes";
import { AzureUCConfigPatchRequestType } from "./AzureUCConfigPatchRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Azure config Patch data.
 */
export class AzureUCConfigPatchData {
  /**
   * Attributes for Azure config Patch Request.
   */
  "attributes": AzureUCConfigPatchRequestAttributes;
  /**
   * Type of Azure config Patch Request.
   */
  "type": AzureUCConfigPatchRequestType;

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
      type: "AzureUCConfigPatchRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AzureUCConfigPatchRequestType",
      required: true,
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
    return AzureUCConfigPatchData.attributeTypeMap;
  }

  public constructor() {}
}
