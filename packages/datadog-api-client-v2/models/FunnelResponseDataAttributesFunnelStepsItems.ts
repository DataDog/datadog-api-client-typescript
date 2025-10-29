/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FunnelResponseElapsedTime } from "./FunnelResponseElapsedTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class FunnelResponseDataAttributesFunnelStepsItems {
  "elapsedTimeToNextStep"?: FunnelResponseElapsedTime;
  "label"?: string;
  "value"?: number;

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
    elapsedTimeToNextStep: {
      baseName: "elapsed_time_to_next_step",
      type: "FunnelResponseElapsedTime",
    },
    label: {
      baseName: "label",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "number",
      format: "int64",
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
    return FunnelResponseDataAttributesFunnelStepsItems.attributeTypeMap;
  }

  public constructor() {}
}
