/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseView } from "./CaseView";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a single work item view.
 */
export class CaseViewResponse {
  /**
   * A saved work item view that provides a filtered, reusable list of work items matching a specific query. Views act as persistent dashboards for monitoring work item subsets.
   */
  "data": CaseView;

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
      type: "CaseView",
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
    return CaseViewResponse.attributeTypeMap;
  }

  public constructor() {}
}
