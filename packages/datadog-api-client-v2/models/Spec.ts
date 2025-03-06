/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Annotation } from "./Annotation";
import { ConnectionEnv } from "./ConnectionEnv";
import { InputSchema } from "./InputSchema";
import { OutputSchema } from "./OutputSchema";
import { Step } from "./Step";
import { Trigger } from "./Trigger";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The spec defines what the workflow does.
 */
export class Spec {
  /**
   * A list of annotations used in the workflow. These are like sticky notes for your workflow!
   */
  "annotations"?: Array<Annotation>;
  /**
   * A list of connections or connection groups used in the workflow.
   */
  "connectionEnvs"?: Array<ConnectionEnv>;
  /**
   * Unique identifier used to trigger workflows automatically in Datadog.
   */
  "handle"?: string;
  /**
   * A list of input parameters for the workflow. These can be used as dynamic runtime values in your workflow.
   */
  "inputSchema"?: InputSchema;
  /**
   * A list of output parameters for the workflow.
   */
  "outputSchema"?: OutputSchema;
  /**
   * A `Step` is a sub-component of a workflow. Each `Step` performs an action.
   */
  "steps"?: Array<Step>;
  /**
   * The list of triggers that activate this workflow. At least one trigger is required, and each trigger type may appear at most once.
   */
  "triggers"?: Array<Trigger>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    annotations: {
      baseName: "annotations",
      type: "Array<Annotation>",
    },
    connectionEnvs: {
      baseName: "connectionEnvs",
      type: "Array<ConnectionEnv>",
    },
    handle: {
      baseName: "handle",
      type: "string",
    },
    inputSchema: {
      baseName: "inputSchema",
      type: "InputSchema",
    },
    outputSchema: {
      baseName: "outputSchema",
      type: "OutputSchema",
    },
    steps: {
      baseName: "steps",
      type: "Array<Step>",
    },
    triggers: {
      baseName: "triggers",
      type: "Array<Trigger>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Spec.attributeTypeMap;
  }

  public constructor() {}
}
