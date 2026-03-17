/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAmazonS3GenericEncodingJsonType } from "./ObservabilityPipelineAmazonS3GenericEncodingJsonType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON encoding.
 */
export class ObservabilityPipelineAmazonS3GenericEncodingJson {
  /**
   * The encoding type. Always `json`.
   */
  "type": ObservabilityPipelineAmazonS3GenericEncodingJsonType;

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
    type: {
      baseName: "type",
      type: "ObservabilityPipelineAmazonS3GenericEncodingJsonType",
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
    return ObservabilityPipelineAmazonS3GenericEncodingJson.attributeTypeMap;
  }

  public constructor() {}
}
