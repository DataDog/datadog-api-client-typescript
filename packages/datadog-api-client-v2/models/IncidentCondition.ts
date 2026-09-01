/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTagValue } from "./IncidentTagValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Conditions that determine which incidents trigger the workflow.
 */
export class IncidentCondition {
  /**
   * Incident tags and values used to filter matching incidents.
   */
  "tagValues"?: Array<IncidentTagValue>;

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
    tagValues: {
      baseName: "tagValues",
      type: "Array<IncidentTagValue>",
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
    return IncidentCondition.attributeTypeMap;
  }

  public constructor() {}
}
