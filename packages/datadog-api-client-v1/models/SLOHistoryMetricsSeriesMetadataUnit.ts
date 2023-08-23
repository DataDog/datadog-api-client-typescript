/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An Object of metric units.
 */
export class SLOHistoryMetricsSeriesMetadataUnit {
  /**
   * The family of metric unit, for example `bytes` is the family for `kibibyte`, `byte`, and `bit` units.
   */
  "family"?: string;
  /**
   * The ID of the metric unit.
   */
  "id"?: number;
  /**
   * The unit of the metric, for instance `byte`.
   */
  "name"?: string;
  /**
   * The plural Unit of metric, for instance `bytes`.
   */
  "plural"?: string;
  /**
   * The scale factor of metric unit, for instance `1.0`.
   */
  "scaleFactor"?: number;
  /**
   * A shorter and abbreviated version of the metric unit, for instance `B`.
   */
  "shortName"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    family: {
      type: "string",
    },
    id: {
      type: "number",
      format: "int64",
    },
    name: {
      type: "string",
    },
    plural: {
      type: "string",
    },
    scaleFactor: {
      baseName: "scale_factor",
      type: "number",
      format: "double",
    },
    shortName: {
      baseName: "short_name",
      type: "string",
    },
  };
}
