/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ValidateV2Attributes } from "./ValidateV2Attributes";
import { ValidateV2Type } from "./ValidateV2Type";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object containing the API key validation result.
 */
export class ValidateV2Data {
  /**
   * Attributes of the API key validation response.
   */
  "attributes": ValidateV2Attributes;
  /**
   * The UUID of the organization associated with the API key.
   */
  "id": string;
  /**
   * Resource type for the API key validation response.
   */
  "type": ValidateV2Type;

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
      type: "ValidateV2Attributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ValidateV2Type",
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
    return ValidateV2Data.attributeTypeMap;
  }

  public constructor() {}
}
