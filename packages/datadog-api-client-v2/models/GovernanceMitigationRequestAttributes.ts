/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a governance mitigation request.
 */
export class GovernanceMitigationRequestAttributes {
  /**
   * The identifiers of the detections to mitigate in this request.
   */
  "detectionIds"?: Array<string>;
  /**
   * The detection type whose detections should be mitigated.
   */
  "detectionType"?: string;
  /**
   * A free-form map of parameter names to their configured values.
   */
  "mitigationParameters"?: { [key: string]: any };
  /**
   * The mitigation to apply to the selected detections. Defaults to the control's configured mitigation when omitted.
   */
  "mitigationType"?: string;

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
    detectionIds: {
      baseName: "detection_ids",
      type: "Array<string>",
    },
    detectionType: {
      baseName: "detection_type",
      type: "string",
    },
    mitigationParameters: {
      baseName: "mitigation_parameters",
      type: "{ [key: string]: any; }",
    },
    mitigationType: {
      baseName: "mitigation_type",
      type: "string",
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
    return GovernanceMitigationRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
