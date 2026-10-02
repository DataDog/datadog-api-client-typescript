/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsSkippedReason } from "./ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsSkippedReason";
import { ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsStatus } from "./ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsStatus";
import { ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsType } from "./ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Result of one diagnostic check for an experiment.
 */
export class ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItems {
  /**
   * Explanation of the diagnostic check result.
   */
  "message"?: string;
  /**
   * Identifier of the metric associated with this check.
   */
  "metricId"?: string;
  /**
   * Reason the diagnostic check could not be evaluated.
   */
  "skippedReason"?: ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsSkippedReason;
  /**
   * Outcome of an individual diagnostic check.
   */
  "status": ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsStatus;
  /**
   * Short title of the diagnostic check.
   */
  "title": string;
  /**
   * Kind of diagnostic check performed.
   */
  "type": ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsType;

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
    message: {
      baseName: "message",
      type: "string",
    },
    metricId: {
      baseName: "metric_id",
      type: "string",
    },
    skippedReason: {
      baseName: "skipped_reason",
      type: "ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsSkippedReason",
    },
    status: {
      baseName: "status",
      type: "ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsStatus",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsType",
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
    return ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItems.attributeTypeMap;
  }

  public constructor() {}
}
