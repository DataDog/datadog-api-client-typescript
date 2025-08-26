/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DetailedFindingAttributes } from "./DetailedFindingAttributes";
import { DetailedFindingType } from "./DetailedFindingType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single finding with with message and resource configuration.
 */
export class DetailedFinding {
  /**
   * The JSON:API attributes of the detailed finding.
   */
  "attributes"?: DetailedFindingAttributes;
  /**
   * The unique ID for this finding.
   */
  "id"?: string;
  /**
   * The JSON:API type for findings that have the message and resource configuration.
   */
  "type"?: DetailedFindingType;

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
      type: "DetailedFindingAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DetailedFindingType",
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
    return DetailedFinding.attributeTypeMap;
  }

  public constructor() {}
}
