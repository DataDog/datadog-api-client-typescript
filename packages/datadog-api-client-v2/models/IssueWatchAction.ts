/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueState } from "./IssueState";
import { IssueWatchActionKind } from "./IssueWatchActionKind";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Action applied to the issue when the watch condition is met.
 */
export class IssueWatchAction {
  /**
   * State of the issue
   */
  "from"?: IssueState;
  /**
   * Kind of watch action.
   */
  "kind": IssueWatchActionKind;
  /**
   * State of the issue
   */
  "to"?: IssueState;

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
    from: {
      baseName: "from",
      type: "IssueState",
    },
    kind: {
      baseName: "kind",
      type: "IssueWatchActionKind",
      required: true,
    },
    to: {
      baseName: "to",
      type: "IssueState",
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
    return IssueWatchAction.attributeTypeMap;
  }

  public constructor() {}
}
