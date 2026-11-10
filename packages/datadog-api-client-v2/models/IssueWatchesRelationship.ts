/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueWatchReference } from "./IssueWatchReference";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship between the issue and its active watches. Returned when `watches` is included and the issue has an active watch.
 */
export class IssueWatchesRelationship {
  /**
   * Array of active watches on the issue.
   */
  "data": Array<IssueWatchReference>;

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
    data: {
      baseName: "data",
      type: "Array<IssueWatchReference>",
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
    return IssueWatchesRelationship.attributeTypeMap;
  }

  public constructor() {}
}
