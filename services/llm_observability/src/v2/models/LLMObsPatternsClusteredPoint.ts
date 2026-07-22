import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * A single data point grouped into a topic.
 */
export class LLMObsPatternsClusteredPoint {
  /**
   * Identifier of the source event.
   */
  "eventId": string;
  /**
   * Unique identifier of the clustered point.
   */
  "id": string;
  /**
   * Input text of the source span.
   */
  "input": string;
  /**
   * Whether the point is included in the patterns dataset.
   */
  "isIncluded": boolean;
  /**
   * Whether the point is suggested for inclusion in the patterns dataset.
   */
  "isSuggested": boolean;
  /**
   * Identifier of the source session.
   */
  "sessionId": string;
  /**
   * Identifier of the source span.
   */
  "spanId": string;
  /**
   * Identifier of the topic the point belongs to.
   */
  "topicId": string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    eventId: {
      baseName: "event_id",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    input: {
      baseName: "input",
      type: "string",
      required: true,
    },
    isIncluded: {
      baseName: "is_included",
      type: "boolean",
      required: true,
    },
    isSuggested: {
      baseName: "is_suggested",
      type: "boolean",
      required: true,
    },
    sessionId: {
      baseName: "session_id",
      type: "string",
      required: true,
    },
    spanId: {
      baseName: "span_id",
      type: "string",
      required: true,
    },
    topicId: {
      baseName: "topic_id",
      type: "string",
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
    return LLMObsPatternsClusteredPoint.attributeTypeMap;
  }

  public constructor() {}
}
