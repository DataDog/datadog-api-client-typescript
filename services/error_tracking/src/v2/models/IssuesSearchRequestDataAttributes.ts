import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssuesSearchRequestDataAttributesOrderBy } from "./IssuesSearchRequestDataAttributesOrderBy";
import { IssuesSearchRequestDataAttributesPersona } from "./IssuesSearchRequestDataAttributesPersona";
import { IssuesSearchRequestDataAttributesTrack } from "./IssuesSearchRequestDataAttributesTrack";

/**
 * Object describing a search issue request.
 */
export class IssuesSearchRequestDataAttributes {
  /**
   * Start date (inclusive) of the query in milliseconds since the Unix epoch.
   */
  "from": number;
  /**
   * The attribute to sort the search results by.
   */
  "orderBy"?: IssuesSearchRequestDataAttributesOrderBy;
  /**
   * Persona for the search. Either track(s) or persona(s) must be specified.
   */
  "persona"?: IssuesSearchRequestDataAttributesPersona;
  /**
   * Search query following the event search syntax.
   */
  "query": string;
  /**
   * End date (exclusive) of the query in milliseconds since the Unix epoch.
   */
  "to": number;
  /**
   * Track of the events to query. Either track(s) or persona(s) must be specified.
   */
  "track"?: IssuesSearchRequestDataAttributesTrack;
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
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    orderBy: {
      baseName: "order_by",
      type: "IssuesSearchRequestDataAttributesOrderBy",
    },
    persona: {
      baseName: "persona",
      type: "IssuesSearchRequestDataAttributesPersona",
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "int64",
    },
    track: {
      baseName: "track",
      type: "IssuesSearchRequestDataAttributesTrack",
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
    return IssuesSearchRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
