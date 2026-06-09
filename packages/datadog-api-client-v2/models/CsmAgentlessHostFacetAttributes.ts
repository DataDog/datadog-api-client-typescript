/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an agentless host facet.
 */
export class CsmAgentlessHostFacetAttributes {
  /**
   * Whether the facet has a bounded set of allowed values. `true` indicates a fixed value set and `false` indicates free-form values.
   */
  "bounded": boolean;
  /**
   * Whether the facet is bundled as part of the default facet set. `true` indicates bundled and `false` indicates custom.
   */
  "bundled": boolean;
  /**
   * Whether the facet is both bundled and actively used. `true` indicates in use; `false` indicates unused.
   */
  "bundledAndUsed": boolean;
  /**
   * The list of default filter values for the facet.
   */
  "defaultValues": Array<string>;
  /**
   * A human-readable description of what the facet represents.
   */
  "description": string;
  /**
   * Whether the facet can be edited by users. `true` indicates editable; `false` indicates read-only.
   */
  "editable": boolean;
  /**
   * The UI display type for the facet, such as `list`.
   */
  "facetType": string;
  /**
   * The list of UI groups that this facet belongs to.
   */
  "groups": Array<string>;
  /**
   * The display name of the facet.
   */
  "name": string;
  /**
   * The field path used when filtering by this facet.
   */
  "path": string;
  /**
   * The data source that provides the facet values.
   */
  "source": string;
  /**
   * The data type of the facet values.
   */
  "type": string;
  /**
   * The list of allowed filter values for bounded facets. Empty for unbounded facets.
   */
  "values": Array<string>;

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
    bounded: {
      baseName: "bounded",
      type: "boolean",
      required: true,
    },
    bundled: {
      baseName: "bundled",
      type: "boolean",
      required: true,
    },
    bundledAndUsed: {
      baseName: "bundledAndUsed",
      type: "boolean",
      required: true,
    },
    defaultValues: {
      baseName: "defaultValues",
      type: "Array<string>",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    editable: {
      baseName: "editable",
      type: "boolean",
      required: true,
    },
    facetType: {
      baseName: "facetType",
      type: "string",
      required: true,
    },
    groups: {
      baseName: "groups",
      type: "Array<string>",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    path: {
      baseName: "path",
      type: "string",
      required: true,
    },
    source: {
      baseName: "source",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
    values: {
      baseName: "values",
      type: "Array<string>",
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
    return CsmAgentlessHostFacetAttributes.attributeTypeMap;
  }

  public constructor() {}
}
