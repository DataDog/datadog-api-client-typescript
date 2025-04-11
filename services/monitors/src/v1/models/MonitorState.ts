import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorStateGroup } from "./MonitorStateGroup";

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
