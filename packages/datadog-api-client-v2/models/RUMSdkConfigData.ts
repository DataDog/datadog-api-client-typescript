/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMSdkConfigAttributes } from "./RUMSdkConfigAttributes";
import { RUMSdkConfigMeta } from "./RUMSdkConfigMeta";
import { RUMSdkConfigType } from "./RUMSdkConfigType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The RUM SDK configuration data object.
 */
export class RUMSdkConfigData {
  /**
   * Attributes of the RUM SDK configuration.
   */
  "attributes": RUMSdkConfigAttributes;
  /**
   * The unique identifier of the RUM SDK configuration.
   */
  "id": string;
  /**
   * Metadata associated with a RUM SDK configuration.
   */
  "meta"?: RUMSdkConfigMeta;
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
      type: "RUMSdkConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RUMSdkConfigMeta",
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
    return RUMSdkConfigData.attributeTypeMap;
  }

  public constructor() {}
}
