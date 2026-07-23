/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMOperationStrongLinkResponseAttributes } from "./RUMOperationStrongLinkResponseAttributes";
import { RUMOperationStrongLinkType } from "./RUMOperationStrongLinkType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object in a RUM operation strong link response.
 */
export class RUMOperationStrongLinkResponseData {
  /**
   * Attributes of a RUM operation strong link response.
   */
  "attributes": RUMOperationStrongLinkResponseAttributes;
  /**
   * The unique identifier of the strong link, formatted as `<operation_id>:<feature_id>`.
   */
  "id": string;
  /**
   * The JSON:API type for RUM operation strong link resources.
   */
  "type": RUMOperationStrongLinkType;

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
      type: "RUMOperationStrongLinkResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMOperationStrongLinkType",
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
    return RUMOperationStrongLinkResponseData.attributeTypeMap;
  }

  public constructor() {}
}
