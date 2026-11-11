/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsExperimentHoldoutV2DTODataAttributesHoldoutType } from "./ExperimentsExperimentHoldoutV2DTODataAttributesHoldoutType";
import { ExperimentsExperimentHoldoutV2DTODataAttributesKind } from "./ExperimentsExperimentHoldoutV2DTODataAttributesKind";
import { ExperimentsExperimentHoldoutV2DTODataAttributesState } from "./ExperimentsExperimentHoldoutV2DTODataAttributesState";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Attributes of a holdout that the experiment is attached to.
 */
export class ExperimentsExperimentHoldoutV2DTODataAttributes {
  /**
   * Zero-based position of this MANAGED holdout in the experiment's evaluation order. The GLOBAL holdout is evaluated first. Null for EXTERNAL holdouts.
   */
  "evaluationOrder"?: Int64;
  /**
   * How Datadog serves a MANAGED holdout. GLOBAL holdouts apply to every eligible experiment of a subject type. SELECTIVE holdouts apply only to the experiments attached to them. Null for EXTERNAL holdouts.
   */
  "holdoutType"?: ExperimentsExperimentHoldoutV2DTODataAttributesHoldoutType;
  /**
   * Key of the holdout.
   */
  "key"?: string;
  /**
   * Whether Datadog serves the holdout. Datadog serves MANAGED holdouts. EXTERNAL holdouts record what your own feature flagging system holds back, and Datadog does not serve them.
   */
  "kind"?: ExperimentsExperimentHoldoutV2DTODataAttributesKind;
  /**
   * Display name of the holdout.
   */
  "name"?: string;
  /**
   * Lifecycle phase of the holdout. PENDING holdouts have not started including experiments. INCLUDING holdouts are adding experiments. WAITING_FOR_ANALYSIS holdouts have stopped including experiments but have not started analysis. ANALYSING holdouts are in their analysis window. COMPLETE applies only to EXTERNAL holdouts that have ended their analysis window but are not archived.
   */
  "state"?: ExperimentsExperimentHoldoutV2DTODataAttributesState;
  /**
   * Share of subjects the holdout holds back, from 0 to 1.
   */
  "trafficAllocation"?: number;

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
    evaluationOrder: {
      baseName: "evaluation_order",
      type: "number",
      format: "int64",
    },
    holdoutType: {
      baseName: "holdout_type",
      type: "ExperimentsExperimentHoldoutV2DTODataAttributesHoldoutType",
    },
    key: {
      baseName: "key",
      type: "string",
    },
    kind: {
      baseName: "kind",
      type: "ExperimentsExperimentHoldoutV2DTODataAttributesKind",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    state: {
      baseName: "state",
      type: "ExperimentsExperimentHoldoutV2DTODataAttributesState",
    },
    trafficAllocation: {
      baseName: "traffic_allocation",
      type: "number",
      format: "double",
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
    return ExperimentsExperimentHoldoutV2DTODataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
