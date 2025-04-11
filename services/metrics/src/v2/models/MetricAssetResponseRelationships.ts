import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricAssetDashboardRelationships } from "./MetricAssetDashboardRelationships";
import { MetricAssetMonitorRelationships } from "./MetricAssetMonitorRelationships";
import { MetricAssetNotebookRelationships } from "./MetricAssetNotebookRelationships";
import { MetricAssetSLORelationships } from "./MetricAssetSLORelationships";

/**
 * Relationships to assets related to the metric.
 */
export class MetricAssetResponseRelationships {
  /**
   * An object containing the list of dashboards that can be referenced in the `included` data.
   */
  "dashboards"?: MetricAssetDashboardRelationships;
  /**
   * A object containing the list of monitors that can be referenced in the `included` data.
   */
  "monitors"?: MetricAssetMonitorRelationships;
  /**
   * An object containing the list of notebooks that can be referenced in the `included` data.
   */
  "notebooks"?: MetricAssetNotebookRelationships;
  /**
   * An object containing a list of SLOs that can be referenced in the `included` data.
   */
  "slos"?: MetricAssetSLORelationships;
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
    dashboards: {
      baseName: "dashboards",
      type: "MetricAssetDashboardRelationships",
    },
    monitors: {
      baseName: "monitors",
      type: "MetricAssetMonitorRelationships",
    },
    notebooks: {
      baseName: "notebooks",
      type: "MetricAssetNotebookRelationships",
    },
    slos: {
      baseName: "slos",
      type: "MetricAssetSLORelationships",
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
    return MetricAssetResponseRelationships.attributeTypeMap;
  }

  public constructor() {}
}
