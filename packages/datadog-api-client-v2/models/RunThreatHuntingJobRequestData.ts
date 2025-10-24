/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RunThreatHuntingJobRequestAttributes } from "./RunThreatHuntingJobRequestAttributes";
import { RunThreatHuntingJobRequestDataType } from "./RunThreatHuntingJobRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for running a threat hunting job request.
 */
export class RunThreatHuntingJobRequestData {
  /**
   * Run a threat hunting job request.
   */
  "attributes"?: RunThreatHuntingJobRequestAttributes;
  /**
   * Type of data.
   */
  "type"?: RunThreatHuntingJobRequestDataType;

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
      type: "RunThreatHuntingJobRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "RunThreatHuntingJobRequestDataType",
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
    return RunThreatHuntingJobRequestData.attributeTypeMap;
  }

  public constructor() {}
}
