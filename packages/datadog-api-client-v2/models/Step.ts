/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CompletionGate } from "./CompletionGate";
import { ErrorHandler } from "./ErrorHandler";
import { OutboundEdge } from "./OutboundEdge";
import { Parameter } from "./Parameter";
import { ReadinessGate } from "./ReadinessGate";
import { StepDisplay } from "./StepDisplay";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Step is a sub-component of a workflow. Each Step performs an action.
 */
export class Step {
  /**
   * The unique identifier of an action.
   */
  "actionId": string;
  /**
   * Used to create conditions before running subsequent actions.
   */
  "completionGate"?: CompletionGate;
  /**
   * The unique identifier of a connection defined in the spec.
   */
  "connectionLabel"?: string;
  /**
   * The definition of `StepDisplay` object.
   */
  "display"?: StepDisplay;
  /**
   * The `Step` `errorHandlers`.
   */
  "errorHandlers"?: Array<ErrorHandler>;
  /**
   * Name of the step.
   */
  "name": string;
  /**
   * A list of subsequent actions to run.
   */
  "outboundEdges"?: Array<OutboundEdge>;
  /**
   * A list of inputs for an action.
   */
  "parameters"?: Array<Parameter>;
  /**
   * Used to merge multiple branches into a single branch.
   */
  "readinessGate"?: ReadinessGate;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    actionId: {
      baseName: "actionId",
      type: "string",
      required: true,
    },
    completionGate: {
      baseName: "completionGate",
      type: "CompletionGate",
    },
    connectionLabel: {
      baseName: "connectionLabel",
      type: "string",
    },
    display: {
      baseName: "display",
      type: "StepDisplay",
    },
    errorHandlers: {
      baseName: "errorHandlers",
      type: "Array<ErrorHandler>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    outboundEdges: {
      baseName: "outboundEdges",
      type: "Array<OutboundEdge>",
    },
    parameters: {
      baseName: "parameters",
      type: "Array<Parameter>",
    },
    readinessGate: {
      baseName: "readinessGate",
      type: "ReadinessGate",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Step.attributeTypeMap;
  }

  public constructor() {}
}
