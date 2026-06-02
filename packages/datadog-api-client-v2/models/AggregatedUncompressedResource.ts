/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Aggregated uncompressed resource detection grouped by URL path.
 */
export class AggregatedUncompressedResource {
  /**
   * Average uncompressed body size in bytes.
   */
  "avgBodySize": number;
  /**
   * Average resource loading duration in nanoseconds.
   */
  "avgDuration": number;
  /**
   * Unique fingerprint identifying this detection group.
   */
  "fingerprint": string;
  /**
   * Impact score combining view frequency and resource size.
   */
  "impactScore": number;
  /**
   * Total number of detection instances across sampled views.
   */
  "instanceCount": number;
  /**
   * CDN or hosting provider type for the resource.
   */
  "providerType": string | null;
  /**
   * Whether the resource is render-blocking.
   */
  "renderBlocking": string | null;
  /**
   * Type of the resource (JS, CSS, image, fetch, and so on).
   */
  "resourceType": string;
  /**
   * Normalized URL path pattern for the uncompressed resource.
   */
  "urlPathGroup": string;
  /**
   * Number of sampled views where this detection occurred.
   */
  "viewOccurrences": number;

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
    avgBodySize: {
      baseName: "avg_body_size",
      type: "number",
      required: true,
      format: "int64",
    },
    avgDuration: {
      baseName: "avg_duration",
      type: "number",
      required: true,
      format: "int64",
    },
    fingerprint: {
      baseName: "fingerprint",
      type: "string",
      required: true,
    },
    impactScore: {
      baseName: "impact_score",
      type: "number",
      required: true,
      format: "double",
    },
    instanceCount: {
      baseName: "instance_count",
      type: "number",
      required: true,
      format: "int32",
    },
    providerType: {
      baseName: "provider_type",
      type: "string",
      required: true,
    },
    renderBlocking: {
      baseName: "render_blocking",
      type: "string",
      required: true,
    },
    resourceType: {
      baseName: "resource_type",
      type: "string",
      required: true,
    },
    urlPathGroup: {
      baseName: "url_path_group",
      type: "string",
      required: true,
    },
    viewOccurrences: {
      baseName: "view_occurrences",
      type: "number",
      required: true,
      format: "int32",
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
    return AggregatedUncompressedResource.attributeTypeMap;
  }

  public constructor() {}
}
