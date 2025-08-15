/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorStateGroup } from "./MonitorStateGroup";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Wrapper object with the different monitor states.
 */
export class MonitorState {
  /**
   * Dictionary where the keys are groups (comma separated lists of tags) and the values are
   * the list of groups your monitor is broken down on.
   */
  "groups"?: { [key: string]: MonitorStateGroup };

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
    groups: {
      baseName: "groups",
      type: "{ [key: string]: MonitorStateGroup; }",
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
    return MonitorState.attributeTypeMap;
  }

  public constructor() {}
}
