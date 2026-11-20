/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMSdkConfigType } from "./RUMSdkConfigType";
import { RUMSdkConfigUpdateAttributes } from "./RUMSdkConfigUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object for updating a RUM SDK configuration.
 */
export class RUMSdkConfigUpdateData {
  /**
   * Attributes of the RUM SDK configuration to update.
   */
  "attributes": RUMSdkConfigUpdateAttributes;
  /**
   * The ID of the RUM SDK configuration to update.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `rum_sdk_config`.
   */
  "type": RUMSdkConfigType;

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
      type: "RUMSdkConfigUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMSdkConfigType",
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
    return RUMSdkConfigUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
