/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RunWorkflowWidgetDefinitionType } from "./RunWorkflowWidgetDefinitionType";
import { RunWorkflowWidgetInput } from "./RunWorkflowWidgetInput";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Run workflow is widget that allows you to run a workflow from a dashboard.
 */
export class RunWorkflowWidgetDefinition {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Array of workflow inputs to map to dashboard template variables.
   */
  "inputs"?: Array<RunWorkflowWidgetInput>;
  /**
   * Time setting for the widget.
   */
  "time"?: WidgetTime;
  /**
   * Title of your widget.
   */
  "title"?: string;
  /**
   * How to align the text on the widget.
   */
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  /**
   * Type of the run workflow widget.
   */
  "type": RunWorkflowWidgetDefinitionType;
  /**
   * Workflow id.
   */
  "workflowId": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    inputs: {
      type: "Array<RunWorkflowWidgetInput>",
    },
    time: {
      type: "WidgetTime",
    },
    title: {
      type: "string",
    },
    titleAlign: {
      baseName: "title_align",
      type: "WidgetTextAlign",
    },
    titleSize: {
      baseName: "title_size",
      type: "string",
    },
    type: {
      type: "RunWorkflowWidgetDefinitionType",
      required: true,
    },
    workflowId: {
      baseName: "workflow_id",
      type: "string",
      required: true,
    },
  };
}
