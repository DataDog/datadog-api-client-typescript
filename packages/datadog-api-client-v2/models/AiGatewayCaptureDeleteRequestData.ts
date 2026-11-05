/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayCaptureDeleteRequestDataAttributes } from "./AiGatewayCaptureDeleteRequestDataAttributes";
import { AiGatewayCaptureDeleteRequestDataType } from "./AiGatewayCaptureDeleteRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Override identifier, revisions, and confirmation required for deletion.
 */
export class AiGatewayCaptureDeleteRequestData {
  /**
   * Revisions and confirmation used to delete the override.
   */
  "attributes": AiGatewayCaptureDeleteRequestDataAttributes;
  /**
   * UUID of the override to delete. Must match the `id` path parameter.
   */
  "id": string;
  /**
   * Data capture overrides resource type.
   */
  "type": AiGatewayCaptureDeleteRequestDataType;

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
      type: "AiGatewayCaptureDeleteRequestDataAttributes",
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
      type: "AiGatewayCaptureDeleteRequestDataType",
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
    return AiGatewayCaptureDeleteRequestData.attributeTypeMap;
  }

  public constructor() {}
}
