import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RunWorkflowWidgetDefinitionType } from "./RunWorkflowWidgetDefinitionType";
import { RunWorkflowWidgetInput } from "./RunWorkflowWidgetInput";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

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
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    inputs: {
      baseName: "inputs",
      type: "Array<RunWorkflowWidgetInput>",
    },
    time: {
      baseName: "time",
      type: "WidgetTime",
    },
    title: {
      baseName: "title",
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
      baseName: "type",
      type: "RunWorkflowWidgetDefinitionType",
      required: true,
    },
    workflowId: {
      baseName: "workflow_id",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RunWorkflowWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
