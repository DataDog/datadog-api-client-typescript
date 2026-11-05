/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayCaptureCreateRequestDataAttributes } from "./AiGatewayCaptureCreateRequestDataAttributes";
import { AiGatewayCaptureCreateRequestDataType } from "./AiGatewayCaptureCreateRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * New data capture override with a client-generated UUID and its settings.
 */
export class AiGatewayCaptureCreateRequestData {
  /**
   * Settings and configuration revision for creating the override.
   */
  "attributes": AiGatewayCaptureCreateRequestDataAttributes;
  /**
   * Client-generated UUID for the override.
   */
  "id": string;
  /**
   * Data capture overrides resource type.
   */
  "type": AiGatewayCaptureCreateRequestDataType;

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
      type: "AiGatewayCaptureCreateRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "AiGatewayCaptureCreateRequestDataType",
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
    return AiGatewayCaptureCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
