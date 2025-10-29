/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FunnelSuggestionRequestDataAttributes } from "./FunnelSuggestionRequestDataAttributes";
import { FunnelSuggestionRequestDataType } from "./FunnelSuggestionRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class FunnelSuggestionRequestData {
  "attributes"?: FunnelSuggestionRequestDataAttributes;
  "id"?: string;
  "type": FunnelSuggestionRequestDataType;

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
      type: "FunnelSuggestionRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "FunnelSuggestionRequestDataType",
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
    return FunnelSuggestionRequestData.attributeTypeMap;
  }

  public constructor() {}
}
