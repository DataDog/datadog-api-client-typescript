/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumConfigAttributes } from "./RumConfigAttributes";
import { RumConfigType } from "./RumConfigType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The RUM configuration data.
 */
export class RumConfigData {
  /**
   * Attributes of the RUM configuration.
   */
  "attributes": RumConfigAttributes;
  /**
   * The organization ID associated with the RUM configuration.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `rum_config`.
   */
  "type": RumConfigType;

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
      type: "RumConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumConfigType",
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
    return RumConfigData.attributeTypeMap;
  }

  public constructor() {}
}
