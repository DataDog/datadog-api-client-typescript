/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object to map a dashboard template variable to a workflow input.
 */
export class RunWorkflowWidgetInput {
  /**
   * Name of the workflow input.
   */
  "name": string;
  /**
   * Dashboard template variable. Can be suffixed with '.value' or '.key'.
   */
  "value": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      type: "string",
      required: true,
    },
    value: {
      type: "string",
      required: true,
    },
  };
}
