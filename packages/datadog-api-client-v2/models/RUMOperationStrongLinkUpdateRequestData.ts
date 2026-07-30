/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMOperationStrongLinkType } from "./RUMOperationStrongLinkType";
import { RUMOperationStrongLinkUpdateRequestAttributes } from "./RUMOperationStrongLinkUpdateRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object for updating a RUM operation strong link.
 */
export class RUMOperationStrongLinkUpdateRequestData {
  /**
   * Attributes for updating a RUM operation strong link.
   */
  "attributes": RUMOperationStrongLinkUpdateRequestAttributes;
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
      type: "RUMOperationStrongLinkUpdateRequestAttributes",
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
    return RUMOperationStrongLinkUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
