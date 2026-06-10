/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OwnershipInferenceListAttributes } from "./OwnershipInferenceListAttributes";
import { OwnershipInferencesType } from "./OwnershipInferencesType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data wrapper for the ownership inferences collection response.
 */
export class OwnershipInferenceListData {
  /**
   * The attributes of the ownership inferences collection response.
   */
  "attributes": OwnershipInferenceListAttributes;
  /**
   * The resource identifier associated with the returned inferences.
   */
  "id": string;
  /**
   * The type of the ownership inferences collection resource. The value should always be `ownership_inferences`.
   */
  "type": OwnershipInferencesType;

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
      type: "OwnershipInferenceListAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OwnershipInferencesType",
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
    return OwnershipInferenceListData.attributeTypeMap;
  }

  public constructor() {}
}
