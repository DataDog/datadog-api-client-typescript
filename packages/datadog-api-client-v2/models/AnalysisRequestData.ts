/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnalysisRequestDataAttributes } from "./AnalysisRequestDataAttributes";
import { AnalysisRequestDataType } from "./AnalysisRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The primary data object in the analysis request.
 */
export class AnalysisRequestData {
  /**
   * The attributes of the analysis request, containing the source code and rules to apply.
   */
  "attributes": AnalysisRequestDataAttributes;
  /**
   * An optional identifier for the analysis request resource.
   */
  "id"?: string;
  /**
   * Analysis request resource type.
   */
  "type": AnalysisRequestDataType;

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
      type: "AnalysisRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AnalysisRequestDataType",
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
    return AnalysisRequestData.attributeTypeMap;
  }

  public constructor() {}
}
