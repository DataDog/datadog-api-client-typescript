/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayCaptureConfigurationResponseDataAttributes } from "./AiGatewayCaptureConfigurationResponseDataAttributes";
import { AiGatewayCaptureConfigurationResponseDataType } from "./AiGatewayCaptureConfigurationResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Organization data capture configuration, including its default mode and scoped overrides.
 */
export class AiGatewayCaptureConfigurationResponseData {
  /**
   * Organization default mode, scoped overrides, and current configuration revision.
   */
  "attributes": AiGatewayCaptureConfigurationResponseDataAttributes;
  /**
   * Identifier of the organization configuration resource, always `organization`.
   */
  "id": string;
  /**
   * Data capture configurations resource type.
   */
  "type": AiGatewayCaptureConfigurationResponseDataType;

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
      type: "AiGatewayCaptureConfigurationResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayCaptureConfigurationResponseDataType",
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
    return AiGatewayCaptureConfigurationResponseData.attributeTypeMap;
  }

  public constructor() {}
}
